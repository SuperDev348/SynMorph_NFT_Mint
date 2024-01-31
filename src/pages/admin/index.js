import React, {useState, useEffect} from 'react'
import {
  Paper,
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TablePagination, 
  TableRow,
  Container,
  IconButton
} from '@material-ui/core'
import {Refresh} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { getTokens } from '../../api/nft'
import UpdateDialog from './update'

const columns = [
  { id: "tokenId", label: "ID", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "image", label: "Image", minWidth: 100 },
  { id: "new_image", label: "New Image", minWidth: 100 },
  { id: "status", label: "Status", minWidth: 100 },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "center",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  title: {
    fontSize: '18px',
    paddingBottom: 30
  },
  pending: {
    color: '#c3ab03'
  },
  complete: {
    color: 'green'
  },
  canceled: {
    color: 'red'
  },
  button: {
    textTransform: 'none',
    fontSize: 15,
  },
  refresh: {
    float: 'right',
    marginRight: 30,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))
const Admin = () => {
  const classes = useStyles()
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [tokens, setTokens] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const refresh = async () => {
    const res = await getTokens()
    setTokens(res)
  }

  useEffect(() => {
    refresh()
  }, [])
  return (
    <div>
      <Container maxWidth="lg">
        <h2 style={{textAlign: 'center', padding: 50}}>Admin Manage</h2>
        <IconButton className={classes.refresh} aria-label="detail" onClick={() => refresh()}>
          <Refresh />
        </IconButton>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontSize: 15 }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tokens.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} style={{fontSize: 14}}>
                            {column.id === 'action'?
                              (
                                <>
                                  <UpdateDialog refresh={refresh} item={row} />
                                </>
                              ):
                              column.id === 'image' || column.id === 'new_image'?
                              <img src={row[column.id]} style={{height: 60}} />:
                              column.id === 'status'?
                              (
                                <>
                                  {row.status == 1?
                                    <span className={classes.pending}>Pending</span>:
                                    row.status == 2?
                                    <span className={classes.complete}>Complete</span>:
                                    ''
                                  }
                                </>
                              ):
                              value
                            }
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={tokens.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </div>
  )
}
export default Admin
