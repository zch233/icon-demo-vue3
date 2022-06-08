// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SkypeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkypeOutlined';

export interface SkypeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SkypeOutlined: SkypeOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SkypeOutlinedSvg} />;

SkypeOutlined.displayName = 'SkypeOutlined';

export default FunctionalComponent;