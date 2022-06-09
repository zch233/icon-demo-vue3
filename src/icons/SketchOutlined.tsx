// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SketchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SketchOutlined';

export interface SketchOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SketchOutlined: SketchOutlinedIconType = (props, context) => <Icon name='SketchOutlined' {...{ ...props, ...context.attrs }} icon={SketchOutlinedSvg} />;

SketchOutlined.displayName = 'SketchOutlined';

export default SketchOutlined;