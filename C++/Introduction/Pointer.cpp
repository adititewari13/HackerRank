#include<iostream>
#include<cstdlib>
using namespace std;
void update(int *a,int *b) 
{
   int t=*a;
   *a=*a+*b;
   *b=t-*b;
}

int main()
{
    int a, b;
    int *pa = &a, *pb = &b;
    cin>>a>>b;
    update(pa,pb);
    cout<<a<<endl<<abs(b);
    return 0;
}
