// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import HighlightTwoToneSvg from '@ant-design/icons-svg/lib/asn/HighlightTwoTone';

export interface HighlightTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const HighlightTwoTone: HighlightTwoToneIconType = (props, context) => <Icon name='HighlightTwoTone' {...{ ...props, ...context.attrs }} icon={HighlightTwoToneSvg} />;

HighlightTwoTone.displayName = 'HighlightTwoTone';

export default HighlightTwoTone;