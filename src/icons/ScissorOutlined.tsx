// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ScissorOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScissorOutlined';

export interface ScissorOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ScissorOutlined: ScissorOutlinedIconType = (props, context) => <Icon name='ScissorOutlined' {...{ ...props, ...context.attrs }} icon={ScissorOutlinedSvg} />;

ScissorOutlined.displayName = 'ScissorOutlined';

export default ScissorOutlined;