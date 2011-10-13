

var board = [
      /*  Y0  Y1  Y2  Y3  Y4  Y5  Y6  Y7 */
/* X0 */ ['r','n','b','k','q','b','n','r'],
/* X1 */ ['p','p','p','p','p','p','p','p'],
/* X2 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X3 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X4 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X5 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X6 */ ['P','P','P','P','P','P','P','P'],
/* X7 */ ['R','N','B','Q','K','B','N','R'],
]

var WHITE = 0
var BLACK = 1
var EMPTY = -1

function print_board(board, x, y) {
	document.write("<pre>");
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			if (i == x && j == y)
				document.write("<b>");
			document.write(board[i][j] + ' ');
			if (i == x && j == y)
				document.write("</b>");
		}
		document.write("\n");
	}
	document.write("</pre>");
}

function move_piece(board, x, y, tx, ty) {
	board[tx][ty] = board[x][y];
	board[x][y] = ' ';

	return board;
}

var list_moves_functions = new Array();
list_moves_functions['p'] = list_pawn_moves;
list_moves_functions['r'] = list_rook_moves;
list_moves_functions['n'] = list_knight_moves;
list_moves_functions['b'] = list_bishop_moves;
list_moves_functions['q'] = list_queen_moves;
list_moves_functions['k'] = list_king_moves;

function list_moves(board, x, y) {
	var func = list_moves_functions[board[x][y].toLowerCase()];
	if (func)
		return func(board, x, y);
	else
		return [];
}

var valid_move_functions = new Array();
valid_move_functions['p'] = is_pawn_valid_move;
valid_move_functions['r'] = is_rook_valid_move;
valid_move_functions['n'] = is_knight_valid_move;
valid_move_functions['b'] = is_bishop_valid_move;
valid_move_functions['q'] = is_queen_valid_move;
valid_move_functions['k'] = is_king_valid_move;

function is_valid_move(board, x, y, tx, ty) {
	var func = valid_move_functions[board[x][y].toLowerCase()];
	if (func)
		return func(board, x, y, tx, ty);
	else
		return false;
}

function piece_color(board, x, y) {
	if (board[x][y] == ' ')
		return EMPTY;
	if (board[x][y].toLowerCase() == board[x][y])
		return BLACK;
	return WHITE;
}

function is_open(board, x, y) {
	return (piece_color(board, x, y) == EMPTY);
}

function is_piece(board, x, y) {
	return (piece_color(board, x, y) != EMPTY);
}

function is_pawn_valid_move(board, x, y, tx, ty) {
	var color = piece_color(board, x, y);
	var dir = (color == WHITE ? -1 : 1);
	var startx = (color == WHITE ? 6 : 1);

	if (ty == y) {
		/* Move one space. */
		if (tx == x + 1 * dir
		    && is_open(board, tx, ty))
			return true;

		/* Move two spaces. */
		if (x == startx
		    && tx == x + dir * 2
		    && is_open(board, tx, ty)
		    && is_open(board, tx - dir, ty))
			return true;
	} else if (Math.abs(ty - y) == 1) {
		/* Normal capture. */
		if (tx == x + 1 * dir
		    && is_piece(board, tx, ty)
		    && piece_color(board, tx, ty) != color)
			return true;

		/* En passant. */
		if (x == startx
		    && tx == x + 2 * dir
		    && is_open(board, tx, ty)
		    && is_piece(board, tx - dir, ty)
		    && piece_color(board, tx - dir, ty) != color)
			return true;
	}

	return false;
}

function is_rook_valid_move(board, x, y, tx, ty) {
	var dx = tx - x;
	var dy = ty - y;

	/* Check for horizontal or vertical movement. */
	if (dx != 0 && dy != 0)
		return false;

	/* Make sure no pieces are in the way. */
	if (dx != 0) {
		/* Vertical. */
		dx /= Math.abs(dx);
		for (var cx = x + dx; cx != tx; cx += dx)
			if (is_piece(board, cx, y))
				return false;
	} else {
		/* Horizontal. */
		dy /= Math.abs(dy);
		for (var cy = y + dy; cy != ty; cy += dy)
			if (is_piece(board, x, cy))
				return false;
	}

	/* Make sure final position is not on same color. */
	if (piece_color(board, x, y) == piece_color(board, tx, ty))
		return false;

	return true;
}

function is_knight_valid_move(board, x, y, tx, ty) {
	/* Make sure final position is not on same color. */
	if (piece_color(board, x, y) == piece_color(board, tx, ty))
		return false;

	/* Check for L shaped move. */
	if ((Math.abs(tx - x) == 2 && Math.abs(ty - y) == 1) ||
	    (Math.abs(tx - x) == 1 && Math.abs(ty - y) == 2))
		return true;

	return false;
}

function is_bishop_valid_move(board, x, y, tx, ty) {
	var dx = tx - x;
	var dy = ty - y;

	/* Check for diagonal movement. */
	if (Math.abs(dx) != Math.abs(dy))
		return false;

	/* Make sure no pieces are in the way. */
	dx /= Math.abs(dx);
	dy /= Math.abs(dy);
	for (var cx = x + dx, cy = y + dy; cx != tx; cx += dx, cy += dy)
		if (is_piece(board, cx, cy))
			return false;

	/* Make sure final position is not on same color. */
	if (piece_color(board, x, y) == piece_color(board, tx, ty))
		return false;

	return true;
}

function is_queen_valid_move(board, x, y, tx, ty) {
	return (is_rook_valid_move(board, x, y, tx, ty) ||
		is_bishop_valid_move(board, x, y, tx, ty));
}

function is_king_valid_move(board, x, y, tx, ty) {
	var dx = tx - x;
	var dy = ty - y;

	/* Make sure only moving one square. */
	if (Math.abs(dx) > 1 || Math.abs(dy) > 1)
		return false;

	/* Make sure final position is not on same color. */
	if (piece_color(board, x, y) == piece_color(board, tx, ty))
		return false;

	return true;
}

function list_pawn_moves(board, x, y) {
	var color = piece_color(board, x, y);
	var dir = (color == WHITE ? -1 : 1);
	var startx = (color == WHITE ? 6 : 1);

	var moves = new Array();

	/* Move one space. */
	if (is_open(board, x + dir, y))
		moves.push([x, y, x + dir, y]);

	/* Move two spaces. */
	if (startx == x
	    && is_open(board, x + dir, y)
	    && is_open(board, x + dir * 2, y))
		moves.push([x, y, x + dir * 2, y]);

	/* Normal capture. */
	if (y > 0
	    && is_piece(board, x + dir, y - 1)
	    && (piece_color(board, x, y)
		!= piece_color(board, x + dir, y - 1)))
		moves.push([x, y, x + dir, y - 1]);
	if (y < 7
	    && is_piece(board, x + dir, y + 1)
	    && (piece_color(board, x + dir, y)
		!= piece_color(board, x + dir, y + 1)))
		moves.push([x, y, x + dir, y + 1]);

	/* En passant. TODO */

	return moves;
}

function list_rook_moves(board, x, y) {
	var moves = new Array();

	for (var tx = x - 1; tx >= 0; tx--) {
		if (is_open(board, tx, y)) {
			moves.push([x, y, tx, y]);
		} else if (piece_color(board, x, y)
			   != piece_color(board, tx, y)) {
			moves.push([x, y, tx, y]);
			break;
		} else {
			break;
		}
	}

	for (var tx = x + 1; tx < 8; tx++) {
		if (is_open(board, tx, y)) {
			moves.push([x, y, tx, y]);
		} else if (piece_color(board, x, y)
			   != piece_color(board, tx, y)) {
			moves.push([x, y, tx, y]);
			break;
		} else {
			break;
		}
	}

	for (var ty = y + 1; ty < 8; ty++) {
		if (is_open(board, x, ty)) {
			moves.push([x, y, x, ty]);
		} else if (piece_color(board, x, y)
			   != piece_color(board, x, ty)) {
			moves.push([x, y, x, ty]);
			break;
		} else {
			break;
		}
	}

	for (var ty = y - 1; ty >= 0; ty--) {
		if (is_open(board, x, ty)) {
			moves.push([x, y, x, ty]);
		} else if (piece_color(board, x, y)
			   != piece_color(board, x, ty)) {
			moves.push([x, y, x, ty]);
			break;
		} else {
			break;
		}
	}

	return moves;
}

function list_bishop_moves(board, x, y) {
	var moves = new Array();

	for (var tx = x - 1, ty = y - 1; tx >= 0 && ty >= 0; tx--, ty--) {
		if (is_open(board, tx, ty)) {
			moves.push([x, y, tx, ty]);
		} else if (piece_color(board, x, y)
			   != piece_color(board, tx, ty)) {
			moves.push([x, y, tx, ty]);
			break;
		} else {
			break;
		}
	}

	for (var tx = x + 1, ty = y - 1; tx < 8 && ty >= 0; tx++, ty--) {
		if (is_open(board, tx, ty)) {
			moves.push([x, y, tx, ty]);
		} else if (piece_color(board, x, y)
			   != piece_color(board, tx, ty)) {
			moves.push([x, y, tx, ty]);
			break;
		} else {
			break;
		}
	}

	for (var tx = x - 1, ty = y + 1; tx >= 0 && ty < 8; tx--, ty++) {
		if (is_open(board, tx, ty)) {
			moves.push([x, y, tx, ty]);
		} else if (piece_color(board, x, y)
			   != piece_color(board, tx, ty)) {
			moves.push([x, y, tx, ty]);
			break;
		} else {
			break;
		}
	}

	for (var tx = x + 1, ty = y + 1; tx < 8 && ty < 8; tx++, ty++) {
		if (is_open(board, tx, ty)) {
			moves.push([x, y, tx, ty]);
		} else if (piece_color(board, x, y)
			   != piece_color(board, tx, ty)) {
			moves.push([x, y, tx, ty]);
			break;
		} else {
			break;
		}
	}

	return moves;
}

function list_knight_moves(board, x, y) {
	var moves = new Array();

	for each (var tx in [x - 2, x + 2]) {
		for each (var ty in [y - 1, y + 1]) {
			if (tx >= 0 && tx < 8 && ty >= 0 && ty < 8
			    && piece_color(board, x, y) != piece_color(board, tx, ty))
				moves.push([x, y, tx, ty]);
		}
	}

	for each (var tx in [x - 1, x + 1]) {
		for each (var ty in [y - 2, y + 2]) {
			if (tx >= 0 && tx < 8 && ty >= 0 && ty < 8
			    && piece_color(board, x, y) != piece_color(board, tx, ty))
				moves.push([x, y, tx, ty]);
		}
	}

	return moves;
}

function list_queen_moves(board, x, y) {
	var moves = new Array();

	moves = moves.concat(list_rook_moves(board, x, y));
	moves = moves.concat(list_bishop_moves(board, x, y));

	return moves;
}

function list_king_moves(board, x, y) {
	var moves = new Array();

	for (var tx = x - 1; tx <= x + 1; tx++) {
		for (var ty = y - 1; ty <= y + 1; ty++) {
			if (tx == x && ty == y)
				continue;

			if (tx < 0 || tx > 7 || ty < 0 || ty > 7)
				continue;

			if (piece_color(board, x, y)
					== piece_color(board, tx, ty))
				continue;

			moves.push([x, y, tx, ty]);
		}
	}

	return moves;
}

