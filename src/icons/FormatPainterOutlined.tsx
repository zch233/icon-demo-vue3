// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FormatPainterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormatPainterOutlined';

export interface FormatPainterOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FormatPainterOutlined: FormatPainterOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FormatPainterOutlinedSvg} />
    ;

FormatPainterOutlined.displayName = 'FormatPainterOutlined';

export default FormatPainterOutlined;