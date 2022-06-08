// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FallOutlinedSvg from '@ant-design/icons-svg/lib/asn/FallOutlined';

export interface FallOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FallOutlined: FallOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FallOutlinedSvg} />;

FallOutlined.displayName = 'FallOutlined';

export default FunctionalComponent;