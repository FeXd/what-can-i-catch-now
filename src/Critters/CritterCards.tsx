import React from 'react';
import { TableInstance } from 'react-table';
import styled from 'styled-components';
import { Box, Table, Th, Td } from '../SS';

const AlternatingRows = styled.tr`
	&:nth-child(odd) {
		background: #c7bf99;
	}
	&:nth-child(even) {
		background: #d6cea7;
	}
`;

const StyledTh = styled(Th)`
	white-space: nowrap;

	&:hover {
		cursor: pointer;
	}
`;

interface TableProps {
	table: TableInstance;
}

function CritterCards({ table }: TableProps) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = table;

	return (
		<Box borderRadius="15px" overflow="hidden" width="100%">
			<div className="critterCardWrapper">
      {rows.map((row: any) => {
          console.log(row);
						return (
              <div className="critterCard">
                <div className="critterCardHeader">{row.original.name.substring(0,1)} {row.original.cost}</div>
                <div className="critterCardImage"><img alt={row.original.name} src={row.original.image}/></div>
              </div>
						);
					})}
				</div>
		</Box>
	);
}

export default CritterCards;
