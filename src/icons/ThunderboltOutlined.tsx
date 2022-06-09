// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ThunderboltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ThunderboltOutlined';

export interface ThunderboltOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ThunderboltOutlined: ThunderboltOutlinedIconType = (props, context) => <Icon name='ThunderboltOutlined' {...{ ...props, ...context.attrs }} icon={ThunderboltOutlinedSvg} />;

ThunderboltOutlined.displayName = 'ThunderboltOutlined';

export default ThunderboltOutlined;