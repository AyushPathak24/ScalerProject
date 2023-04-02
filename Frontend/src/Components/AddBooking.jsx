import React from 'react'

const AddBooking = () => {
  return (
    <div>

	<div className="main-wrapper">
		<div className="header">
			<div className="header-left">
				<a href="index.html" className="logo"> <img src="assets/img/hotel_logo.png" width="50" height="70" alt="logo"/> <span className="logoclass">HOTEL</span> </a>
				<a href="index.html" className="logo logo-small"> <img src="assets/img/hotel_logo.png" alt="Logo" width="30" height="30"/> </a>
			</div>
			<a href="javascript:void(0);" id="toggle_btn"> <i className="fe fe-text-align-left"></i> </a>
			<a className="mobile_btn" id="mobile_btn"> <i className="fas fa-bars"></i> </a>
			<ul className="nav user-menu">
				<li className="nav-item dropdown noti-dropdown">
					<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"> <i className="fe fe-bell"></i> <span className="badge badge-pill">3</span> </a>
					<div className="dropdown-menu notifications">
						<div className="topnav-dropdown-header"> <span className="notification-title">Notifications</span> <a href="javascript:void(0)" className="clear-noti"> Clear All </a> </div>
						<div className="noti-content">
							<ul className="notification-list">
								<li className="notification-message">
									<a href="#">
										<div className="media"> <span className="avatar avatar-sm">
											<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg"/>
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Carlson Tech</span> has approved <span className="noti-title">your estimate</span></p>
												<p className="noti-time"><span className="notification-time">4 mins ago</span> </p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="#">
										<div className="media"> <span className="avatar avatar-sm">
											<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-11.jpg"/>
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">International Software
													Inc</span> has sent you a invoice in the amount of <span className="noti-title">$218</span></p>
												<p className="noti-time"><span className="notification-time">6 mins ago</span> </p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="#">
										<div className="media"> <span className="avatar avatar-sm">
											<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-17.jpg"/>
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">John Hendry</span> sent a cancellation request <span className="noti-title">Apple iPhone
													XR</span></p>
												<p className="noti-time"><span className="notification-time">8 mins ago</span> </p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="#">
										<div className="media"> <span className="avatar avatar-sm">
											<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-13.jpg" />
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Mercury Software
													Inc</span> added a new product <span className="noti-title">Apple
													MacBook Pro</span></p>
												<p className="noti-time"><span className="notification-time">12 mins ago</span> </p>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
						<div className="topnav-dropdown-footer"> <a href="#">View all Notifications</a> </div>
					</div>
				</li>
				<li className="nav-item dropdown has-arrow">
					<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"> <span className="user-img"><img className="rounded-circle" src="assets/img/profiles/avatar-01.jpg" width="31" alt="Soeng Souy"/></span> </a>
					<div className="dropdown-menu">
						<div className="user-header">
							<div className="avatar avatar-sm"> <img src="assets/img/profiles/avatar-01.jpg" alt="User Image" className="avatar-img rounded-circle"/> </div>
							<div className="user-text">
								<h6>Soeng Souy</h6>
								<p className="text-muted mb-0">Administrator</p>
							</div>
						</div> <a className="dropdown-item" href="profile.html">My Profile</a> <a className="dropdown-item" href="settings.html">Account Settings</a> <a className="dropdown-item" href="login.html">Logout</a> </div>
				</li>
			</ul>
		</div>
		<div className="sidebar" id="sidebar">
			<div className="sidebar-inner slimscroll">
				<div id="sidebar-menu" className="sidebar-menu">
					<ul>
						<li> <a href="index.html"><i className="fas fa-tachometer-alt"></i> <span>Dashboard</span></a> </li>
						<li className="list-divider"></li>
						<li className="submenu"> <a href="#"><i className="fas fa-suitcase"></i> <span> Booking </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="all-booking.html"> All Booking </a></li>
								<li><a href="edit-booking.html"> Edit Booking </a></li>
								<li><a className="active" href="add-booking.html"> Add Booking </a></li>
							</ul>
						</li>
						<li className="submenu"> <a href="#"><i className="fas fa-user"></i> <span> Customers </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="all-customer.html"> All customers </a></li>
								<li><a href="edit-customer.html"> Edit Customer </a></li>
								<li><a href="add-customer.html"> Add Customer </a></li>
							</ul>
						</li>
						<li className="submenu"> <a href="#"><i className="fas fa-key"></i> <span> Rooms </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="all-rooms.html">All Rooms </a></li>
								<li><a href="edit-room.html"> Edit Rooms </a></li>
								<li><a href="add-room.html"> Add Rooms </a></li>
							</ul>
						</li>
						<li className="submenu"> <a href="#"><i className="fas fa-user"></i> <span> Staff </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="all-staff.html">All Staff </a></li>
								<li><a href="edit-staff.html"> Edit Staff </a></li>
								<li><a href="add-staff.html"> Add Staff </a></li>
							</ul>
						</li>
						<li> <a href="pricing.html"><i className="far fa-money-bill-alt"></i> <span>Pricing</span></a> </li>
						<li className="submenu"> <a href="#"><i className="fas fa-share-alt"></i> <span> Apps </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="chat.html"><i className="fas fa-comments"></i><span> Chat </span></a></li>
								<li className="submenu"> <a href="#"><i className="fas fa-video camera"></i> <span> Calls </span> <span className="menu-arrow"></span></a>
									<ul className="submenu_class" style="display: none;">
										<li><a href="voice-call.html"> Voice Call </a></li>
										<li><a href="video-call.html"> Video Call </a></li>
										<li><a href="incoming-call.html"> Incoming Call </a></li>
									</ul>
								</li>
								<li className="submenu"> <a href="#"><i className="fas fa-envelope"></i> <span> Email </span> <span className="menu-arrow"></span></a>
									<ul className="submenu_class" style="display: none;">
										<li><a href="compose.html">Compose Mail </a></li>
										<li><a href="inbox.html"> Inbox </a></li>
										<li><a href="mail-veiw.html"> Mail Veiw </a></li>
									</ul>
								</li>
							</ul>
						</li>
						<li className="submenu"> <a href="#"><i className="fas fa-user"></i> <span> Employees </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="employees.html">Employees List </a></li>
								<li><a href="leaves.html">Leaves </a></li>
								<li><a href="holidays.html">Holidays </a></li>
								<li><a href="attendance.html">Attendance </a></li>
							</ul>
						</li>
						<li className="submenu"> <a href="#"><i className="far fa-money-bill-alt"></i> <span> Accounts </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="invoices.html">Invoices </a></li>
								<li><a href="payments.html">Payments </a></li>
								<li><a href="expenses.html">Expenses </a></li>
								<li><a href="taxes.html">Taxes </a></li>
								<li><a href="provident-fund.html">Provident Fund </a></li>
							</ul>
						</li>
						<li className="submenu"> <a href="#"><i className="fas fa-book"></i> <span> Payroll </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="salary.html">Employee Salary </a></li>
								<li><a href="salary-veiw.html">Payslip </a></li>
							</ul>
						</li>
						<li> <a href="calendar.html"><i className="fas fa-calendar-alt"></i> <span>Calendar</span></a> </li>
						<li className="submenu"> <a href="#"><i className="fe fe-table"></i> <span> Blog </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="blog.html">Blog </a></li>
								<li><a href="blog-details.html">Blog Veiw </a></li>
								<li><a href="add-blog.html">Add Blog </a></li>
								<li><a href="edit-blog.html">Edit Blog </a></li>
							</ul>
						</li>
						<li> <a href="assets.html"><i className="fas fa-cube"></i> <span>Assests</span></a> </li>
						<li> <a href="activities.html"><i className="far fa-bell"></i> <span>Activities</span></a> </li>
						<li className="submenu"> <a href="#"><i className="fe fe-table"></i> <span> Reports </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="expense-reports.html">Expense Report </a></li>
								<li><a href="invoice-reports.html">Invoice Report </a></li>
							</ul>
						</li>
						<li> <a href="settings.html"><i className="fas fa-cog"></i> <span>Settings</span></a> </li>
						<li className="list-divider"></li>
						<li className="menu-title mt-3"> <span>UI ELEMENTS</span> </li>
						<li className="submenu"> <a href="#"><i className="fas fa-laptop"></i> <span> Components </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="uikit.html">UI Kit </a></li>
								<li><a href="typography.html">Typography </a></li>
								<li><a href="tabs.html">Tabs </a></li>
							</ul>
						</li>
						<li className="submenu"> <a href="#"><i className="fas fa-edit"></i> <span> Forms </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="form-basic-inputs.html">Basic Input </a></li>
								<li><a href="form-input-groups.html">Input Groups </a></li>
								<li><a href="form-horizontal.html">Horizontal Form </a></li>
								<li><a href="form-vertical.html">Vertical Form </a></li>
							</ul>
						</li>
						<li className="submenu"> <a href="#"><i className="fas fa-table"></i> <span> Tables </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="tables-basic.html">Basic Table </a></li>
								<li><a href="tables-datatables.html">Data Table </a></li>
							</ul>
						</li>
						<li className="list-divider"></li>
						<li className="menu-title mt-3"> <span>EXTRAS</span> </li>
						<li className="submenu"> <a href="#"><i className="fas fa-columns"></i> <span> Pages </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="login.html">Login </a></li>
								<li><a href="register.html">Register </a></li>
								<li><a href="forgot-password.html">Forgot Password </a></li>
								<li><a href="change-password.html">Change Password </a></li>
								<li><a href="lock-screen.html">Lockscreen </a></li>
								<li><a href="profile.html">Profile </a></li>
								<li><a href="gallery.html">Gallery </a></li>
								<li><a href="error-404.html">404 Error </a></li>
								<li><a href="error-500.html">500 Error </a></li>
								<li><a href="blank-page.html">Blank Page </a></li>
							</ul>
						</li>
						<li className="submenu"> <a href="#"><i className="fas fa-share-alt"></i> <span> Multi Level </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class" style="display: none;">
								<li><a href="">Level 1 </a></li>
								<li><a href="">Level 2 </a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="page-wrapper">
			<div className="content container-fluid">
				<div className="page-header">
					<div className="row align-items-center">
						<div className="col">
							<h3 className="page-title mt-5">Add Booking</h3> </div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<form>
							<div className="row formtype">
								<div className="col-md-4">
									<div className="form-group">
										<label>Booking ID</label>
										<input className="form-control" type="text" value="BKG-0001"/> </div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Name</label>
										<select className="form-control" id="sel1" name="sellist1">
											<option>Select</option>
											<option>Jennifer Robinson</option>
											<option>Terry Baker</option>
										</select>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Room Type</label>
										<select className="form-control" id="sel2" name="sellist1">
											<option>Select</option>
											<option>Single</option>
											<option>Double</option>
											<option>Quad</option>
											<option>King</option>
											<option>Suite</option>
											<option>Villa</option>
										</select>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Total Members</label>
										<select className="form-control" id="sel3" name="sellist1">
											<option>Select</option>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
										</select>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Date</label>
										<div className="cal-icon">
											<input type="text" className="form-control datetimepicker"/> </div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Time</label>
										<div className="time-icon">
											<input type="text" className="form-control" id="datetimepicker3"/> </div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Arrival Date</label>
										<div className="cal-icon">
											<input type="text" className="form-control datetimepicker"/> </div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Depature Date</label>
										<div className="cal-icon">
											<input type="text" className="form-control datetimepicker"/> </div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Email ID</label>
										<input type="text" className="form-control" id="usr"/> </div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Phone Number</label>
										<input type="text" className="form-control" id="usr1"/> </div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>File Upload</label>
										<div className="custom-file mb-3">
											<input type="file" className="custom-file-input" id="customFile" name="filename"/>
											<label className="custom-file-label" for="customFile">Choose file</label>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Message</label>
										<textarea className="form-control" rows="5" id="comment" name="text"></textarea>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<button type="button" className="btn btn-primary buttonedit1">Create Booking</button>
			</div>
		</div>
	</div>
    </div>
  )
}

export default AddBooking