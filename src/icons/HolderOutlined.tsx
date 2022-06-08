// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import HolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/HolderOutlined';

export interface HolderOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const HolderOutlined: HolderOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={HolderOutlinedSvg} />;

HolderOutlined.displayName = 'HolderOutlined';

export default FunctionalComponent;