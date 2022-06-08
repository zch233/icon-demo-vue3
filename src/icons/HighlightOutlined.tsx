// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import HighlightOutlinedSvg from '@ant-design/icons-svg/lib/asn/HighlightOutlined';

export interface HighlightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const HighlightOutlined: HighlightOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={HighlightOutlinedSvg} />;

HighlightOutlined.displayName = 'HighlightOutlined';

export default FunctionalComponent;