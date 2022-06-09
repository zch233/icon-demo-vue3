// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ClearOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClearOutlined';

export interface ClearOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ClearOutlined: ClearOutlinedIconType = (props, context) => <Icon name='ClearOutlined' {...{ ...props, ...context.attrs }} icon={ClearOutlinedSvg} />;

ClearOutlined.displayName = 'ClearOutlined';

export default ClearOutlined;