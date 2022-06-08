// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UpOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpOutlined';

export interface UpOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UpOutlined: UpOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={UpOutlinedSvg} />;

UpOutlined.displayName = 'UpOutlined';

export default FunctionalComponent;