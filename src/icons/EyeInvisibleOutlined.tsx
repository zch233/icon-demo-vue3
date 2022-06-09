// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EyeInvisibleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined';

export interface EyeInvisibleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EyeInvisibleOutlined: EyeInvisibleOutlinedIconType = (props, context) => <Icon name='EyeInvisibleOutlined' {...{ ...props, ...context.attrs }} icon={EyeInvisibleOutlinedSvg} />;

EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';

export default EyeInvisibleOutlined;