// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PaperClipOutlinedSvg from '@ant-design/icons-svg/lib/asn/PaperClipOutlined';

export interface PaperClipOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PaperClipOutlined: PaperClipOutlinedIconType = (props, context) => <Icon name='PaperClipOutlined' {...{ ...props, ...context.attrs }} icon={PaperClipOutlinedSvg} />;

PaperClipOutlined.displayName = 'PaperClipOutlined';

export default PaperClipOutlined;