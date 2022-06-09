// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SketchCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SketchCircleFilled';

export interface SketchCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SketchCircleFilled: SketchCircleFilledIconType = (props, context) => <Icon name='SketchCircleFilled' {...{ ...props, ...context.attrs }} icon={SketchCircleFilledSvg} />;

SketchCircleFilled.displayName = 'SketchCircleFilled';

export default SketchCircleFilled;