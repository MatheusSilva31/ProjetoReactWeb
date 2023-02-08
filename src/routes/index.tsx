import { Button } from '@mui/material'
import { Routes,Route,Navigate } from 'react-router-dom'
import { CadastrarPage } from '../pages/CadastrarPage'
import { Page } from '../pages/HomePage'
import { AboutPage } from '../pages/sobrePage'
import { FixedBottomNavigation } from '../shared/components/NavigationComponentFixed'

export const AppRoutes = () =>{
    return(
        <>
        <FixedBottomNavigation></FixedBottomNavigation>
        <Routes>
            <Route path="/pagina-inicial" element={<Page/>}/>
            <Route path="/cadastrar" element={<CadastrarPage/>}/>
            <Route path="/sobre" element={<AboutPage/>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial" />}/>
        </Routes>
        </>
        
    )
}