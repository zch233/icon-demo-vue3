// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DragOutlinedSvg from '@ant-design/icons-svg/lib/asn/DragOutlined';

export interface DragOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DragOutlined: DragOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DragOutlinedSvg} />;

DragOutlined.displayName = 'DragOutlined';

export default FunctionalComponent;