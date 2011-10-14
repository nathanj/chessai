
function pick_move(board, color) {
	var moves = new Array();

	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			if (piece_color(board, i, j) == color) {
				moves = moves.concat(list_moves(board,
								i, j));
			}
		}
	}

	return moves[Math.floor(Math.random()*moves.length)];
}

print_board(board, -1, -1);

for (var i = 0; i < 60; i++) {
	var move = pick_move(board, i % 2 == 0 ? WHITE : BLACK);
	board = move_piece(board, move[0], move[1], move[2], move[3]);
	print_board(board, move[2], move[3]);
	document.write("<br>");
	document.write("<br>");
	document.write("<br>");
}

