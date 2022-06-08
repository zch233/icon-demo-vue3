// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CrownFilledSvg from '@ant-design/icons-svg/lib/asn/CrownFilled';

export interface CrownFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CrownFilled: CrownFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CrownFilledSvg} />;

CrownFilled.displayName = 'CrownFilled';

export default CrownFilled;