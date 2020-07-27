#include <bits/stdc++.h>

using namespace std;
int main()
{
    int n;
    cin >> n;
    string word[10]={"Greater than 9","one","two","three","four","five","six","seven","eight","nine"};
    if(1<=n&&n<=9)
      cout<<word[n];
    else 
      cout<<word[0];

    return 0;
}
