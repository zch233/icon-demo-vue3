// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GooglePlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/GooglePlusOutlined';

export interface GooglePlusOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GooglePlusOutlined: GooglePlusOutlinedIconType = (props, context) => <Icon name='GooglePlusOutlined' {...{ ...props, ...context.attrs }} icon={GooglePlusOutlinedSvg} />;

GooglePlusOutlined.displayName = 'GooglePlusOutlined';

export default GooglePlusOutlined;