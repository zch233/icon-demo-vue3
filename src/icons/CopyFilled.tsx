// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CopyFilledSvg from '@ant-design/icons-svg/lib/asn/CopyFilled';

export interface CopyFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CopyFilled: CopyFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CopyFilledSvg} />;

CopyFilled.displayName = 'CopyFilled';

export default CopyFilled;