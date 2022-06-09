// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AppstoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreOutlined';

export interface AppstoreOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AppstoreOutlined: AppstoreOutlinedIconType = (props, context) => <Icon name='AppstoreOutlined' {...{ ...props, ...context.attrs }} icon={AppstoreOutlinedSvg} />;

AppstoreOutlined.displayName = 'AppstoreOutlined';

export default AppstoreOutlined;