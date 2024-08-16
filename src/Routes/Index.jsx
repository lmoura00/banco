import {NavigationContainer} from '@react-navigation/native'
import { useAuth } from '../Hook/Auth'
import { AuthRoutes } from './AuthRoutes'
import { PublicRoutes } from './PublicRoutes'


export function Routes(){
    const {user} = useAuth()
    return(
        <NavigationContainer>
            {user?<AuthRoutes/>:<PublicRoutes/>}
        </NavigationContainer>
    )
}