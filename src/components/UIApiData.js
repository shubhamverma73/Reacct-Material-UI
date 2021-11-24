import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import {TextField, Button, TablePagination } from '@material-ui/core';
//https://material-table.com/#/docs/features/actions [For any other refrence]

const UIApiData = () => {

    const[searchInput, setSearchInput] = useState();
    const[prdtData, setPrcData] = useState([]);
    const[resetData, setResetData] = useState([]);
    const productData = async () => {
        let result = await fetch("https://api.spacexdata.com/v3/launches", {
            method: "GET",
            headers: {'Content-Type' : 'application/json'},
        });
        result = await result.json();
        
        var data = [];
        for(var i=0; i<result.length; i++) {        
            data.push(
                {   "mission_name": result[i].mission_name,
                    "launch_year": result[i].launch_year,
                    "core_serial": result[i].rocket.first_stage.cores[0].core_serial,
                    "imageUrl": result[i].links.mission_patch,
                }
            );
        }
        setPrcData(data);
        setResetData(data);
    }
    useEffect(() => {
        productData();
    }, []);
    
	const columns = [
		{
			title: 'Mission Name', field: 'mission_name',
			cellStyle: {
				backgroundColor: '#039be5',
				color: '#FFF'
			},
			headerStyle: {
				backgroundColor: '#039be5',
			}
		}, {
			title: "Launch Year", field: 'launch_year'
		}, {
			title: "Core Serial", field: 'core_serial'
		}, {
			title: 'Profile', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{ width: 40, borderRadius: '50%' }} />
		},

	];

    const searchInputFun = (event) => {
        if(event.target.value) {
            setSearchInput(event.target.value);
        } else {
            setPrcData(resetData);
        }
    }

    const searchdata = () => {
        let prdtDataNew = '';
        let prdtData = resetData;
        const req = {launch_year: searchInput};
        prdtDataNew = prdtData.filter((currentElement) => {
			return currentElement.launch_year === req.launch_year //Return only matched data
		});
        if(req.launch_year) {
            setPrcData(prdtDataNew);
        } else {
            setPrcData(resetData);
        }
    }

    const reset = () => {
        setPrcData(resetData);
        setSearchInput('');
    }

	return (
		<>
            <div style={{margin: "auto", width: "30%", border: "3px solid #dcdcdc", padding: "10px"}}>
                <div style={{width: "100%"}}>
                    <TextField type="text" id="outlined-basic" value={searchInput} label="Search Data" variant="outlined" onChange={(event) => searchInputFun(event)} />
                    <Button variant="contained" style={{marginLeft: "10px", marginTop: "10px"}} color="primary" onClick={() => searchdata()}>Search Data</Button>
                    <Button variant="contained" style={{marginLeft: "10px", marginTop: "10px"}} color="secondary" onClick={() => reset()}>Reset</Button>
                </div>
            </div>

			<div style={{ width: "100%", paddingTop: "20px" }}>
				<MaterialTable
					title="Material Table"
					data={prdtData}
					columns={columns}
					options={{
						search: true,
						padding: 'dense', //Padding of cells and rows
						searchAutoFocus: true,
						paging: true,
						pageSize: 10,
						pageSizeOptions: [10, 20, 50, { value: prdtData.length, label: 'All' }],
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

                    // components={{
                    //     Pagination: props => (
                    //     <TablePagination
                    //         {...props}
                    //         labelRowsPerPage={<div style={{fontSize: 24}}>{props.labelRowsPerPage}</div>}
                    //         labelDisplayedRows={row => <div style={{fontSize: 24}}>{props.labelDisplayedRows(row)}</div>}
                    //         SelectProps={{
                    //         style:{
                    //             fontSize: 24
                    //         }
                    //         }}                    
                    //     />
                    //     )
                    // }}
				/>
			</div>
		</>
	)
};

export default UIApiData;