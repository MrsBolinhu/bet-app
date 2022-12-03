from models.bet import Bet

def test_new_bet():
    bet = Bet(1, 2, 12, 'teste@email.com', 'A')
    assert bet.home_score == 1
    assert bet.visitor_score == 2
    assert bet.id_game == 12
    assert bet.email == 'teste@email.com'
    assert bet.group_ == 'A'

def test_get_bet_winner():
    bet = Bet(1, 2, 12, 'teste@email.com', 'A')
    bet.get_bet_winner()
    assert bet.winner == 'away'
