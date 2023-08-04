#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


string preprocess(string s) {
    int n = s.length();
    string t;
    for (int i = 0; i < n; i++) {
        if (s[i] == 'A') {
            t += "BB";
        } else {
            t += "AA";
        }
    }
    for (unsigned int i = 0; i < t.length();) {
        if (i + 2 < t.length() && t.substr(i, 3) == "AAA") {
            t.erase(i, 3);
        } else if (i + 2 < t.length() && t.substr(i, 3) == "BBB") {
            t.erase(i, 3);
        } else {
            i++;
        }
    }
    return t;
}

// Function to check if substring of S from [a,b] can be converted to substring of T from [c,d]
bool check(string S, string T, int a, int b, int c, int d, vector<string>& preS, vector<string>& preT) {
    string s = preS[b] + preS[a - 1].substr(preS[a - 1].length() - preS[b].length());
    string t = preT[d] + preT[c - 1].substr(preT[c - 1].length() - preT[d].length());
    return (s.find(t) != string::npos);
}

int main() {
    string S, T;
    cin >> S >> T;

    // Preprocess the modified strings
    vector<string> preS(S.length() + 1);
    vector<string> preT(T.length() + 1);
    for (unsigned int i = 1; i <= S.length(); i++) {
        preS[i] = preprocess(S.substr(0, i));
    }
    for (unsigned int i = 1; i <= T.length(); i++) {
        preT[i] = preprocess(T.substr(0, i));
    }

    int Q;
    cin >> Q;
    for (int i = 0; i < Q; i++) {
        int a, b, c, d;
        cin >> a >> b >> c >> d;
        if (check(S, T, a, b, c, d, preS, preT)) {
            cout << "YES\n";
        } else {
            cout << "NO\n";
        }
    }
    return 0;
}