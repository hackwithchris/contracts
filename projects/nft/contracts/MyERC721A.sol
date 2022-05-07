pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC721A is ERC721A, Ownable {

    // mint price really cheap 1 wei
    uint256 public PRICE = 1 wei;
    address payable public DEV_ADDRESS;

    constructor() ERC721A("MyERC721A", "MEA") {
        DEV_ADDRESS = payable(msg.sender);
    }

    function mint(uint256 quantity) external payable {
        require(msg.value==quantity*PRICE, "incorrect amount of eth sent");
        _safeMint(msg.sender, quantity);
    }

    function withdraw() external onlyOwner {
        DEV_ADDRESS.transfer(address(this).balance);
    }
}