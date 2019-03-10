#include <iostream>
using namespace std;
int main() {
	long number;
	do {
		cin >> number;
		if (number > 100)
		{
			cout << "Your number is greater than 100" << endl;
		}
		if (number < 100 && number != 0)
		{
			cout << "Your number is smaller than 100" << endl;
		}
	} while (number != 0);
	{
		cout << "Your number is zero ... bye" << endl;
	}
	system("pause");
	return 0;
}