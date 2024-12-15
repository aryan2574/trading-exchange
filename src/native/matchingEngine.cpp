#include <iostream>
#include <map>
#include <vector>
#include <string>

struct Order
{
    std::string userId;
    double price;
    int quantity;
};

std::map<double, std::vector<Order>> bids;
std::map<double, std::vector<Order>> asks;

void matchOrder(const std::string &side, double price, int quantity, const std::string &userId)
{
    if (side == "buy")
    {
        // Matching logic for buy order
        std::cout << "Matching buy order\n";
    }
    else if (side == "sell")
    {
        // Matching logic for sell order
        std::cout << "Matching sell order\n";
    }
}

void printMarketDepth()
{
    std::cout << "Market Depth:\n";
    for (const auto &bid : bids)
    {
        std::cout << "Bid: " << bid.first << " Quantity: " << bid.second.size() << "\n";
    }
    for (const auto &ask : asks)
    {
        std::cout << "Ask: " << ask.first << " Quantity: " << ask.second.size() << "\n";
    }
}

int main()
{
    matchOrder("buy", 100.0, 10, "user1");
    printMarketDepth();
    return 0;
}