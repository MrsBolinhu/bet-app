import React from 'react'
import { useTabBarContext, useAdminContext } from '../../contexts';
import { Archives, House, Trophy, User } from '../Icons';
import { TabBarButton } from './TabBarButton';

export const TabBar = () => {

    const { tabBar } = useTabBarContext()
    const { isAdmin } = useAdminContext();

    return (
			<>
				{tabBar &&
					<div className="block fixed inset-x-0 bottom-0 z-10 bg-secondaryDark text-primaryLight shadow">
						<div id="tabs" className="flex justify-between p-1">
							<TabBarButton PageLink='/' Icon={<House />} Title='Home'/>
							<TabBarButton PageLink='/ranking' Icon={<Trophy />} Title='Ranking'/>
							{!isAdmin && <TabBarButton PageLink='/bets' Icon={<Archives />} Title='Bets'/>}
							<TabBarButton PageLink='/account' Icon={<User />} Title='Account'/>
						</div>
					</div>
				}
			</>
	)
}
