x= "apple "
y= "orange"
z= "limon "

basket= x + y + z
n= 6
res = [basket[i:i+n] for i in range(0, len(basket), n)]
print(res)

