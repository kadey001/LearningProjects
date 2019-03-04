"""
    Title: Rock Paper Scisors Program
    Author: Kelton Adey
"""

import random

continuePlay = True
aiChoices = ['Rock', 'Paper', 'Scisors']

while continuePlay:
    inputCheck = False

    while not(inputCheck):
        choice = input('Rock, Paper, or Scisors? ')
        if choice.lower() in ['rock', 'paper', 'scisors']:
            inputCheck = True
        else:
            inputCheck = False
            print('Invalid choice, try again.') 

    aiChoice = random.choice(aiChoices)

    print('AI choses: ' + aiChoice)

    if choice.lower() == aiChoice.lower():
        print(choice +' ties with ' + aiChoice)
    else:
        if choice.lower() == 'rock':
            if aiChoice == 'Paper':
                print('Paper beats Rock, You Lose ;-;')
            else:
                print('Rock beats Scisors, You Win!')
        elif choice.lower() == 'paper':
            if aiChoice == 'Scisors':
                print('Scisors beats Paper, You Lose ;(')
            else:
                print('Paper beats Rock, You Win!')
        else:#Scisors
            if aiChoice == 'Rock':
                print('Rock beats Scisors, You Lose ;(')
            else:
                print('Scisors beat Paper, You Win!')

    continueChoice = input('Continue? (y/n): ')

    if continueChoice == 'n':
        continuePlay = False