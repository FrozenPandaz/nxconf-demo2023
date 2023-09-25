import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import { Route, Routes } from 'react-router-dom';
const defaultTheme = createTheme();

const TaxDocuments = React.lazy(
  () => import('./tax-documents/tax-documents/tax-documents')
);
const AccountsSummary = React.lazy(
  () => import('./accounts-summary/accounts-summary')
);
const CreditCardAccountDetails = React.lazy(
  () =>
    import(
      './credit-card/credit-card-account-details/credit-card-account-details'
    )
);

function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header open={open} onClick={toggleDrawer} />
        <Sidebar open={open} onClick={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/accounts" element={<AccountsSummary />} />
            <Route
              path="/card/:accountId"
              element={<CreditCardAccountDetails />}
            />
            <Route path="/tax-documents" element={<TaxDocuments />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export function App() {
  return <Dashboard />;
}

export default App;
