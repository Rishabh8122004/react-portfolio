#include<iostream>
#include<vector>
using namespace std;
void takeinput(vector<vector<char>>&v,string player,char ch){
    char x;
    cout<<"IT'S "<<player<<"'s turn , choose the place accordingly :";
    cin>>x;
    for(int i = 0;i<3;i++){
        for(int j = 0;j<3;j++){
            if(x == v[i][j]){v[i][j] = ch;return;}
        }
    }
    return;
}
void checkwinner(bool &P1,bool &P2,bool &tie,vector<vector<char>>v,char p1){
    //rows check
    for(int i = 0;i<3;i++){
        bool f = true;
        for(int j = 0;j<2;j++){
            if(v[i][j]!=v[i][j+1]){f = false;break;}
        }
        if(f){
            if(p1 == v[i][0]){P1 = true;return;}
            else{P2 = true;return;}
        }
    }
    // columns check
    for(int j = 0;j<3;j++){
        bool f = true;
        for(int i = 0;i<2;i++){
            if(v[i][j]!=v[i+1][j]){f = false;break;}
        }
        if(f){
            if(p1 == v[0][j]){P1 = true;return;}
            else{P2 = true;return;}
        }
    }
    // diagonal 1
    bool f = true;
    for(int i = 0;i<2;i++){
        if(v[i][i]!=v[i+1][i+1]){f = false;break;}
    }
    if(f){
        if(p1 == v[0][0]){P1 = true;return;}
        else{P2 = true;return;}
    }
    // diagonal 2
    f = true;
    for(int i = 0;i<2;i++){
        if(v[i][2-i] != v[i+1][2-i-1]){f = false;break;}
    }
    if(f){
        if(p1 == v[0][2]){P1 = true;return;}
        else{P2 = true;return;}
    }
    // tie check
    f = true;
    for(int i = 0;i<3;i++){
        for(int j = 0;j<3;j++){
            if(v[i][j]!='X' && v[i][j]!='O'){f = false;break;}
        }
    }
    if(f && !P1 && !P2)tie = true;
    return;
}
void display(vector<vector<char>>v){
    for(int i = 0;i<3;i++){
        for(int j = 0;j<3;j++){
            cout<<' '<<v[i][j]<<' ';
            if(j<2)cout<<"|";
        }
        cout<<endl;
        if(i<2){cout<<"---|---|---"<<endl;}
    }
    cout<<endl;
    return;
}
int main(){
    string player1,player2;
    cout<<"ENTER THE NAME OF PLAYER 1 : ";cin>>player1;
    cout<<"ENTER THE NAME OF PLAYER 2 : ";cin>>player2;
    char p1,p2;
    cout<<"CHOOSE THE SYMBOL FOR "<<player1<<" -> 'X' OR 'O' :  ";
    cin>>p1;
    p1 = (p1 == 'x'?'X':'O');
    p2 = (p1 == 'X'?'O':'X');
    cout<<"SYMBOL FOR "<<player2<<" IS -> "<<p2<<endl;
    vector<vector<char>>v(3,vector<char>(3));
    char ch = '1';
    for(int i = 0;i<3;i++){
        for(int j = 0;j<3;j++){
            v[i][j] = ch;
            ch++;
        }
    }
    cout<<"CURRENT STATUS : \n";display(v);
    bool P1 = false,P2 = false,tie = false;
    int x = 1;
    bool turn = false;
    while(!P1 && !P2 && !tie){
        if(!turn){takeinput(v,player1,p1);x++;}
        else{takeinput(v,player2,p2);}
        if(x>=3)checkwinner(P1,P2,tie,v,p1);
        cout<<"CURRENT STATUS : \n";display(v);
        turn = !turn;
    }
    if(tie){cout<<"IT'S A TIE !!";return 0;}
    if(P1){cout<<(player1 == player2?"PLAYER 1 ":player1)<<" WINS !!";return 0;}
    if(P2){cout<<(player1 == player2?"PLAYER 2 ":player2)<<" WINS !!";return 0;}
    return 0;
}