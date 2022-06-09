// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import HeartOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeartOutlined';

export interface HeartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const HeartOutlined: HeartOutlinedIconType = (props, context) => <Icon name='HeartOutlined' {...{ ...props, ...context.attrs }} icon={HeartOutlinedSvg} />;

HeartOutlined.displayName = 'HeartOutlined';

export default HeartOutlined;