// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseOutlined';

export interface CloseOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CloseOutlined: CloseOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CloseOutlinedSvg} />;

CloseOutlined.displayName = 'CloseOutlined';

export default FunctionalComponent;