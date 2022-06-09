// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FormatPainterFilledSvg from '@ant-design/icons-svg/lib/asn/FormatPainterFilled';

export interface FormatPainterFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FormatPainterFilled: FormatPainterFilledIconType = (props, context) => <Icon name='FormatPainterFilled' {...{ ...props, ...context.attrs }} icon={FormatPainterFilledSvg} />;

FormatPainterFilled.displayName = 'FormatPainterFilled';

export default FormatPainterFilled;