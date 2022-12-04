from models.user import User

def test_new_user():
    user = User('Ilana Barbosa', 'ilanabarbosa@email.com', 'cabuloso123', '')
    assert user.nome == 'Ilana Barbosa'
    assert user.email == 'ilanabarbosa@email.com'
    assert user.senha == 'cabuloso123'
    assert user.image == ''