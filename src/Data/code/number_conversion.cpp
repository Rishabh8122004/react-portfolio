#include<iostream>
#include<string>
#include<cmath>
#include<algorithm>
using namespace std;
int binarytodecimal(string &s)
{
    long long int n = s.size();
    long long int result =0;
    for(int i = n-1;i>=0;i--)
    {
        char ch = s[i];
        int num = ch-'0';// making ascii value in the form of 0 or 1; 
        result += (num*(1<<(n-i-1))); // using left shift operator.
    }
    return result;
}
string decimaltobinary(int n)
{
    string result = "";

    while(n>0)
    {
        if(n%2==0)
        {
            //even
            result = "0"+ result;
        }
        else{
            // odd
            result = "1" + result;
        }
        n/=2;
    }
    int minWidth = 3; 
    if (result.length() < minWidth) {
        result.insert(0, minWidth - result.length(), '0');
    }
    return result;
}
string decimaltooctal(int n)
{
   string result = "";
    while(n>0)
    {
        int x = n%8 - 0;
        char y = '0'+x;
       result = y + result;
       n/=8;
    } 
    return result;
}
string decimaltohexadecimal(int n)
{
    if(n==0) {return "0";}
   string result = "";
    while(n>0)
    {
        int x = n%16;
        if(x<=9)
        {
            char y = '0' + x ;
       result = y + result;}
       else if ( x>=10 && x<=15)
       {
        char y = 'A'+(x-10);
        result = y + result;
       }
       n/=16;
    } 
    return result;
}
string hexadecimaltobinary(char x)
{
    int n;
    if(x >='0' && x<='9')
    {
        n = x - '0';
    }
    if(x>='A' && x<='F')
    {
        n = x - 'A' + 10;
    }

    string result = "";

    while(n>0)
    {
        if(n%2==0)
        {
            //even
            result = "0"+ result;
        }
        else{
            // odd
            result = "1" + result;
        }
        n/=2;
    }
    int minWidth = 4; 
    if (result.length() < minWidth) {
        result.insert(0, minWidth - result.length(), '0');
    }
    return result;
}
int main()
{
    string a;
    string b;
    cout<<endl;
    cout<<"Enter the type of number you are going to enter : "<<endl;
    getline(cin,a);
    cout<<endl;
    cout<<"Enter the type of number you want :"<<endl;
    cin>>b;

    if(a == "binary" && b == "decimal")
    {
    string s;
    cout<<"enter the binary number :"<<endl;
    cin>>s;
    cout<<endl;
    cout<<"The decimal conversion is : "<<endl<<binarytodecimal(s); 
    }
    if(a == "binary" && b == "octal")
    {
        string s;
        cout<<"Enter the binary number :";
        cin>>s;
        long long int n = binarytodecimal(s);
        cout<<endl;
        cout<<"the octal conversion is :"<<decimaltooctal(n);

    }
    if(a == "binary" && b == "hexadecimal")
    {
        string s;
        cout<<"Enter the binary number :";
        cin>>s;
        long long int n = binarytodecimal(s);
        cout<<endl;
       cout<<"The hexadecimal conversion is :"<<decimaltohexadecimal(n);
    }
    if(a == "decimal" && b == "binary")
    {
        int num ;
        cout<<"enter the decimal number :";
        cin>>num;
        cout<<endl;
        cout<<"the binary conersion is :"<<endl<<decimaltobinary(num);
    }
    if(a == "decimal" && b == "octal")
    {
        int num ;
        cout<<"enter the decimal number :";
        cin>>num;
        cout<<endl;
        cout<<"the binary conersion is :"<<endl<<decimaltooctal(num);
    }
    if(a == "decimal" && b == "hexadecimal")
    {
        int num ;
        cout<<"enter the decimal number :";
        cin>>num;
        cout<<endl;
        cout<<"the binary conersion is :"<<endl<<decimaltohexadecimal(num);
    }
    if(a == "octal" && b == "decimal")
    {
        int num ;
        cout<<"enter the octal number :";
        cin>>num;
        int x = num;
        string ans = "";
        while(x>0)
        {
            ans = decimaltobinary(x%10) + ans;
            x = x/10;
        }
        cout<<endl;
        cout<<"The decimal conversion is :"<<binarytodecimal(ans);
    }
    if(a == "octal" && b == "binary")
    {
        int num ;
        cout<<"enter the octal number :";
        cin>>num;
        int x = num;
        string ans = "";
        while(x>0)
        {
            ans = decimaltobinary(x%10) + ans;
            x = x/10;
        }
        cout<<"the binary conversion is : "<<ans;
        
    }
    if(a == "octal" && b == "hexadecimal")
    {
        int num ;
        cout<<"enter the octal number :";
        cin>>num;
        int x = num;
        string ans = "";
        while(x>0)
        {
            ans = decimaltobinary(x%10) + ans;
            x = x/10;
        }
        long long int n = binarytodecimal(ans);
        cout<<endl;
        cout<<"the hexadecimal conversion is : "<<decimaltohexadecimal(n);
    }
    if(a == "hexadecimal" && b == "binary")
    {
        
        string num ;
        cout<<"enter the hexadecimal number :";
        cin>>num;
        int x = num.size();
        int i = x-1;
        string ans = "";
        while(i>=0)
        {
            ans = hexadecimaltobinary(num[i]) + ans;
            i--;
        }
        cout<<endl;
        cout<<"The binary conversion is :"<<ans;

        
    }
    if(a == "hexadecimal" && b == "decimal")
    {
        string num ;
        cout<<"enter the hexadecimal number :";
        cin>>num;
        int x = num.size();
        int i = x-1;
        string ans = "";
        while(i>=0)
        {
            ans = hexadecimaltobinary(num[i]) + ans;
            i--;
        }
        cout<<endl;
        cout<<"the decimal conversion is :"<<binarytodecimal(ans);
    }
    if(a == "hexadecimal" && b == "octal")
    {
         string num ;
        cout<<"enter the hexadecimal number :";
        cin>>num;
        int x = num.size();
        int i = x-1;
        string ans = "";
        while(i>=0)
        {
            ans = hexadecimaltobinary(num[i]) + ans;
            i--;
        }
      long long int n =  binarytodecimal(ans);
      cout<<endl;
      cout<<"The octal conversion is :"<<decimaltooctal(n);
    }

}