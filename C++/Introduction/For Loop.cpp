#include <iostream>
#include <cstdio>
using namespace std;

int main() 
{
   int a,b;
   cin>>a>>b;
   string word[9]={"one","two","three","four","five","six","seven","eight","nine"};
   for(int i=a;i<=b;i++)
      {
          if(i>=1 && i<=9)
            cout<<word[i-1]<<endl;
          else
             {
                 if(i%2==0)
                   cout<<"even"<<endl;
                 else
                   cout<<"odd"<<endl;
             }
      }

    return 0;
}
