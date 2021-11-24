import React from 'react';
import MaterialTable from 'material-table';
//https://material-table.com/#/docs/features/actions [For any other refrence]

const UIBox = () => {

	const data = [
		{
			name: "Shubham", address: "Bhadohi", mob: 9754433618, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
		}, {
			name: "Sonu", address: "Chapra", mob: 9754433619, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
		}, {
			name: "Vishwash", address: "New Delhi", mob: 9754433620, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
		}, {
			name: "Dhananjay", address: "Patna", mob: 9754433621, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
		}, {
			name: "Praveen", address: "Bhagalpur", mob: 9754433622, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
		}, {
			name: "Jay", address: "Sitamadhi", mob: 9754433622, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
		}, {
			name: "Sachid", address: "Kanpur", mob: 9754433622, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
		}, {
			name: "Sonam", address: "Muzzafarpur", mob: 9754433622, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
		}, {
			name: "Bharti", address: "Merath", mob: 9754433622, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
		}, {
			name: "Sahil", address: "Samastipur", mob: 9754433622, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
		}, {
			name: "Akshata", address: "Amrawati", mob: 9754433622, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
		}
	];
	const columns = [
		{
			title: 'Name', field: 'name',
			cellStyle: {
				backgroundColor: '#039be5',
				color: '#FFF'
			},
			headerStyle: {
				backgroundColor: '#039be5',
			}
		}, {
			title: "Address", field: 'address'
		}, {
			title: "Mobile", field: 'mob'
		}, {
			title: 'Profile', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{ width: 40, borderRadius: '50%' }} />
		},

	];

	console.log(data);

	return (
		<>
			<div style={{ width: "100%", paddingTop: "20px" }}>
				<MaterialTable
					title="Material Table"
					data={data}
					columns={columns}
					options={{
						search: true,
						padding: 'dense', //Padding of cells and rows
						searchAutoFocus: true,
						paging: true,
						pageSize: 10,
						pageSizeOptions: [10, 20, 30],
						paginationType: 'stepped',
						exportButton: true,
						actionsColumnIndex: -1,
						rowStyle: (data, index) => {
							if (index % 2) {
								return { backgroundColor: "#f2f2f2" }
							}
						},
						filtering: true
					}}
					actions={[
						{
							icon: 'edit',
							tooltip: 'Edit Data',
							onClick: (event, rowData) => alert("You want to edit " + rowData.name)
						}, {
							icon: 'delete',
							tooltip: 'Delete User',
							onClick: (event, rowData) => window.confirm("You want to delete " + rowData.name)
						}
					]}
					localization={{
						header: {
							actions: 'Actions', //Change header name
						}
					}}
				/>


			</div>
		</>
	)
};

export default UIBox;