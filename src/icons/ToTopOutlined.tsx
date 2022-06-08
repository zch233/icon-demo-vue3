// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ToTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToTopOutlined';

export interface ToTopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ToTopOutlined: ToTopOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ToTopOutlinedSvg} />;

ToTopOutlined.displayName = 'ToTopOutlined';

export default FunctionalComponent;