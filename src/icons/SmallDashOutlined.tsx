// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SmallDashOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmallDashOutlined';

export interface SmallDashOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SmallDashOutlined: SmallDashOutlinedIconType = (props, context) => <Icon name='SmallDashOutlined' {...{ ...props, ...context.attrs }} icon={SmallDashOutlinedSvg} />;

SmallDashOutlined.displayName = 'SmallDashOutlined';

export default SmallDashOutlined;