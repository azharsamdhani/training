import random
import numpy as np

class MagicSquare:
    def mS(self,arr):
        sums = []
        for row in arr:
            asum = sum(row)
            sums.append(asum)

        for row in arr.transpose():
            asum = sum(row)
            sums.append(asum)

        dsum1 = 0
        dsum2 = 0
        n = len(arr)

        for i in range(0,n):
            dsum1 += arr[i][i]
            dsum2 += arr[i][n-i-1]

        sums.append(dsum1)
        sums.append(dsum2)

        prevsum = sums[0]
        isMagic = True
        for asum in sums:
            if asum != prevsum:
                isMagic = False
            prevsum=asum

        return isMagic

    def generateRandomSquare(self,n):
        rand = random.sample(range(1,(n*n)+1),n*n)  
        arr = np.reshape(rand,(n,n))
        return arr

    

newMagicSquare = MagicSquare()
# newMagicSquare.mS(square)
count = 1
while True:
    square = newMagicSquare.generateRandomSquare(3)
    isMagic = newMagicSquare.mS(square)
    if(isMagic==True):        
        print("This is a magic square\n",square)
        print(f"Iterated for {count} times\n")
        break
    count += 1