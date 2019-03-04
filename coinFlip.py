"""
    Title: Coin Flip Simulator
    Author: Kelton Adey
"""

import random

coin = ['heads', 'tales']
heads = 0
tales = 0
i = 0

numOfFlips = int(input('Enter number of desired coin flips: '))

while i < numOfFlips:
    i += 1
    result = random.choice(coin)
    if result == 'heads':
        heads += 1
    else:
        tales += 1

print('Results:\nHeads: ' + str(heads) + '\nTales: ' + str(tales))