pragma solidity ^0.5.16;

contract Validation {
    constructor() public {}

    struct Certificate {
        string Given_name;
        string Family_name;
        uint256 National_identification_number;
        string Date_of_birth;
        string Scientific_discipline;
        string Diploma_issued_by;
        string Diploma_issue_date;
    }

    mapping(bytes32 => Certificate) public certificates;

    event certificateGenerated(bytes32 _certificateId);

    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }
        assembly {
                result := mload(add(source, 32))
        }
    }

    function generateCertificate(
        string memory _id,
        string memory _Given_name,
        string memory _Family_name,
        uint256 _National_identification_number,
        string memory _Date_of_birth,
        string memory _Scientific_discipline,
        string memory _Diploma_issued_by,
        string memory _Diploma_issue_date) public {
        bytes32 byte_id = stringToBytes32(_id);
        require(certificates[byte_id].National_identification_number == 0, "Diploma with given id already exists");
        certificates[byte_id] = Certificate(_Given_name, _Family_name, _National_identification_number, _Date_of_birth, 
        _Scientific_discipline, _Diploma_issued_by, _Diploma_issue_date);
        emit certificateGenerated(byte_id);
    }

    function getData(string memory _id) public view returns(string memory, string memory, uint256, string memory, string memory, string memory, string memory) {
        bytes32 byte_id = stringToBytes32(_id);
        Certificate memory temp = certificates[byte_id];
        require(temp.National_identification_number != 0, "No data exists");
        return (temp.Given_name, temp.Family_name, temp.National_identification_number, temp.Date_of_birth, temp.Scientific_discipline, temp.Diploma_issued_by, temp.Diploma_issue_date);
    }
}
