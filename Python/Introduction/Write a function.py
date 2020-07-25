def is_leap(year):
    leap = False
    if year in range(1900,(10**5)+1):
        r_4=year%4
        r_100=year%100
        r_400=year%400
        if((r_4==0 and r_100!=0)or(r_400==0)):
            leap=True
        else:
            leap=False
    return leap

