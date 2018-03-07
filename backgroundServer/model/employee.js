function Employee(){
	this.name = '';
	this.sex = '';
	this.birthday = '';
	this.jobId = '';
	this.address = '';
	this.phone = '';
	this.identityCard = '';
	this.email = '';
	this.joinDate = '';
	this.department = '';
	this.getDepartment = function() {
		return this.department;
	}

	this.setDepartment = function(department) {
		this.department = department;
	}

	this.getName = function() {
		return this.name;
	}
	this.setName = function(name) {
		this.name = name;
	}
	this.getSex = function() {
		return this.sex;
	}
	this.setSex = function(sex) {
		this.sex = sex;
	}
	this.getBirthday = function() {
		return this.birthday;
	}
	this.setBirthday = function(birthday) {
		this.birthday = birthday;
	}
	this.getJobId = function() {
		return this.jobId;
	}
	this.setJobId = function(jobId) {
		this.jobId = jobId;
	}
	this.getAddress = function() {
		return this.address;
	}
	this.setAddress = function(address) {
		this.address = address;
	}
	this.getPhone = function() {
		return this.phone;
	}
	this.setPhone = function(phone) {
		this.phone = phone;
	}
	this.getIdentityCard = function() {
		return this.identityCard;
	}
	this.setIdentityCard = function(identityCard) {
		this.identityCard = identityCard;
	}
	this.getEmail = function() {
		return this.email;
	}
	this.setEmail = function(email) {
		this.email = email;
	}
	this.getJoinDate = function() {
		return this.joinDate;
	}
	this.setJoinDate = function(joinDate) {
		this.joinDate = joinDate;
	}
}
module.exports = Employee;