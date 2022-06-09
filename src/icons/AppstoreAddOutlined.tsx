// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AppstoreAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreAddOutlined';

export interface AppstoreAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AppstoreAddOutlined: AppstoreAddOutlinedIconType = (props, context) => <Icon name='AppstoreAddOutlined' {...{ ...props, ...context.attrs }} icon={AppstoreAddOutlinedSvg} />;

AppstoreAddOutlined.displayName = 'AppstoreAddOutlined';

export default AppstoreAddOutlined;